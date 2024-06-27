const bookedTickets = [];

function bookTickets() {
  const direction = document.getElementById("direction").value;
  const date = document.getElementById("date").value;
  const seats = document.getElementById("seats").value.split(",");

  const booking = {
    direction,
    date,
    seats: seats.map((seat) => seat.trim()),
  };

  bookedTickets.push(booking);
  displayBookedTickets();
}

function displayBookedTickets() {
  const bookedTicketsList = document.getElementById("bookedTickets");
  bookedTicketsList.innerHTML = "";

  bookedTickets.forEach((booking) => {
    const bookingElement = document.createElement("div");
    bookingElement.innerHTML = `
            <h3>Direction: ${booking.direction}, Date: ${booking.date}</h3>
            <p>Seats: ${booking.seats.join(", ")}</p>
        `;
    bookedTicketsList.appendChild(bookingElement);
  });
}
