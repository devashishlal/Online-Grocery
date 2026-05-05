function validateForm() {
    const form = document.getElementById("grievanceForm");
    const email = form.email.value;
    const orderId = form.orderId.value;
    const description = form.description.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (orderId.trim() === "") {
        alert("Please enter your Order ID.");
        return false;
    }

    if (description.trim() === "") {
        alert("Please provide a description of your grievance.");
        return false;
    }

    alert("Grievance submitted successfully!");
    return true;
}