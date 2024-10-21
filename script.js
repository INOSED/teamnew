let currentEvent = '';

// Function to open the booking form modal
function openBookingForm(eventName) {
  currentEvent = eventName;
  document.getElementById('event-name').innerText = eventName;
  document.getElementById('booking-form-container').classList.remove('hidden');
}

// Function to close the booking form modal
function closeBookingForm() {
  document.getElementById('booking-form-container').classList.add('hidden');
}

// Function to handle form submission
document.getElementById('booking-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  // Update seat count
  updateSeatCount(currentEvent, quantity);
  
  // Show confirmation
  document.getElementById('confirmed-event').innerText = currentEvent;
  document.getElementById('confirmed-email').innerText = email;
  document.getElementById('confirmation').classList.remove('hidden');

  // Close booking form
  closeBookingForm();
});

// Function to close confirmation modal
function closeConfirmation() {
  document.getElementById('confirmation').classList.add('hidden');
}

// Function to update seat count
function updateSeatCount(event, quantity) {
  let seats;
  switch(event) {
    case 'Music Concert':
      seats = document.getElementById('seats-concert');
      break;
    case 'Art Exhibition':
      seats = document.getElementById('seats-art');
      break;
    case 'Food Festival':
      seats = document.getElementById('seats-food');
      break;
    default:
      return;
  }
  
  let availableSeats = parseInt(seats.innerText);
  if (availableSeats >= quantity) {
    seats.innerText = availableSeats - quantity;
  } else {
    alert('Not enough seats available!');
  }
}
