<form id="myForm">
  <label for="email">Email:</label>
  <input type="email" id="email" required>
  <br><br>

  <label for="age">Age:</label>
  <input type="number" id="age" min="18" max="99">
  <br><br>

  <label for="message">Message:</label><br>
  <textarea id="message" rows="6" cols="40"></textarea>
  <br><br>

  <button type="submit">Submit</button>
</form>

<div id="errorMessages" style="color:red;"></div>

<script>
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  let errors = [];

  // Email validation (regex)
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  // Age validation
  const age = Number(document.getElementById("age").value);
  if (age && (age < 18 || age > 99)) {
    errors.push("Age must be between 18 and 99.");
  }

  // Message validations
  const message = document.getElementById("message").value.trim();
  const wordCount = message.split(/\s+/).filter(word => word.length > 0).length;
  if (wordCount > 100) {
    errors.push("Message must not exceed 100 words.");
  }
  if (message.length > 5000) {
    errors.push("Message must not exceed 5000 characters.");
  }

  // Display errors or submit
  const errorDiv = document.getElementById("errorMessages");
  if (errors.length > 0) {
    errorDiv.innerHTML = errors.join("<br>");
  } else {
    errorDiv.innerHTML = "";
    alert("Form submitted successfully!");
    this.submit();
  }
});
</script>
