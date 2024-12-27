import React, { useState } from 'react';
    import { toast } from 'sonner';
    
    function Monitor() {
      const [isMonitoring, setIsMonitoring] = useState(false);
      const [activityLog, setActivityLog] = useState([]);
    
      const handleStartMonitoring = () => {
        setIsMonitoring(true);
        toast.success('Monitoring started!');
        // Simulate activity detection
        simulateActivityDetection();
      };
    
      const handleStopMonitoring = () => {
        setIsMonitoring(false);
        toast.error('Monitoring stopped!');
      };
    
      const simulateActivityDetection = () => {
        const activities = ['walking', 'standing', 'eating', 'sitting'];
        let log = [];
        let interval = setInterval(() => {
          if (!isMonitoring) {
            clearInterval(interval);
            return;
          }
          const randomActivity = activities[Math.floor(Math.random() * activities.length)];
          log = [...log, `Detected: ${randomActivity} at ${new Date().toLocaleTimeString()}`];
          setActivityLog(log);
        }, 2000);
      };
    
      return (
        <div>
          <h2 className="text-2xl font-bold mb-4">Monitor</h2>
          <p>This is the monitor page.</p>
          <div className="bg-gray-200 rounded-md p-4 mb-4">
            <h3 className="text-lg font-semibold mb-2">Real-time Video Monitor</h3>
            <div className="bg-gray-300 h-48 flex items-center justify-center rounded-md">
              <span className="text-gray-500">Video Placeholder</span>
            </div>
            <div className="mt-4">
              <h4 className="text-md font-semibold mb-2">Activity Log</h4>
              <ul className="text-sm">
                {activityLog.map((log, index) => (
                  <li key={index}>{log}</li>
                ))}
              </ul>
            </div>
          </div>
          {!isMonitoring ? (
            <button
              onClick={handleStartMonitoring}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Start Monitoring
            </button>
          ) : (
            <button
              onClick={handleStopMonitoring}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Stop Monitoring
            </button>
          )}
        </div>
      );
    }
    
    export default Monitor;
