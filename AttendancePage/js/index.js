const attendanceRecords = [];

function markAttendance() {
  const group = document.getElementById("group").value;
  const clazz = document.getElementById("class").value;
  const topic = document.getElementById("topic").value;
  const students = document.getElementById("students").value.split(",");

  const record = {
    group,
    class: clazz,
    topic,
    students: students.map((student) => student.trim()),
  };

  attendanceRecords.push(record);
  displayAttendance();
}

function displayAttendance() {
  const attendanceList = document.getElementById("attendanceList");
  attendanceList.innerHTML = "";

  attendanceRecords.forEach((record) => {
    const recordElement = document.createElement("div");
    recordElement.innerHTML = `
            <h3>Group: ${record.group}, Class: ${record.class}</h3>
            <p>Topic: ${record.topic}</p>
            <p>Attendees: ${record.students.join(", ")}</p>
        `;
    attendanceList.appendChild(recordElement);
  });
}
