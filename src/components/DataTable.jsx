import { useState, useRef, useEffect } from "react";
import { TextField } from "@mui/material";
import { useVirtualizer } from "@tanstack/react-virtual";

const DataTable = ({ data, selectedId, onSelect }) => {
  const [filter, setFilter] = useState("");

  const filteredData = data.filter((d) =>
    d.projectName.toLowerCase().includes(filter.toLowerCase()),
  );

  const parentRef = useRef();

  const rowVirtualizer = useVirtualizer({
    count: filteredData.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 40,
  });

  // Auto scroll to selected row when marker clicked
  useEffect(() => {
    const index = filteredData.findIndex((d) => d.id === selectedId);

    if (index !== -1) {
      rowVirtualizer.scrollToIndex(index, {
        align: "center",
      });
    }
  }, [selectedId]);

  return (
    <>
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        className="filter-input"
        placeholder="Search projects..."
        onChange={(e) => setFilter(e.target.value)}
        sx={{
          background: "#f8fafc",
          borderRadius: "10px",
        }}
      />

      <div className="table-header">
        <div>Project Name</div>
        <div>Latitude</div>
        <div>Longitude</div>
        <div>Status</div>
      </div>

      <div
        ref={parentRef}
        style={{
          height: `500px`,
          overflow: "auto",
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const item = filteredData[virtualRow.index];

            return (
              <div
                key={item.id}
                className={
                  selectedId === item.id ? "table-row selected" : "table-row"
                }
                onClick={() => onSelect(item.id)}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                <div>{item.projectName}</div>
                <div>{item.latitude.toFixed(3)}</div>
                <div>{item.longitude.toFixed(3)}</div>
                <div>{item.status}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DataTable;
