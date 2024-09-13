import React, { useEffect, useRef } from "react";
import styles from "@/Components/Dashboard/LatestCandidates/styles.module.scss";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required chart.js components
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const JobPosting = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Check if chart instance already exists to avoid multiple re-renders
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create the chart
    chartInstanceRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Private Equity-Associate",
          "Private Equity-Associate",
          "Private Equity-Associate",
        ],
        datasets: [
          {
            label: "Sales",
            data: [50, 150, 300],
            backgroundColor: [
              "rgba(132, 110, 247, 1)",
              "rgba(124, 161, 249, 1)",
              "rgba(144, 221, 251, 1)",
            ],
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        indexAxis: "y",
        display: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              display: false, // Hides the y-axis labels
            },
          },
        },
      },
    });
  }, []);

  return (
    <div className={styles.latestCandidateCard}>
      <h2>Your Job Postings</h2>
      <div style={{ marginTop: "10px" }}>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default JobPosting;
