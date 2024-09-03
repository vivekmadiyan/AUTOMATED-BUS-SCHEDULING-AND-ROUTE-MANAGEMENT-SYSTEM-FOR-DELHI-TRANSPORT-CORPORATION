async function submitDonorForm() {
    const name = document.getElementById('donor-name').value;
    const phone = document.getElementById('donor-phone').value;
    const foodQuantity = document.getElementById('donor-food-quantity').value;
    const address = document.getElementById('donor-address').value;
    const city = document.getElementById('donor-city').value;

    try {
        const response = await fetch('/donor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, phone, foodQuantity, address, city })
        });

        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getAvailableDonors() {
    try {
        const response = await fetch('/donors');
        const data = await response.json();

        const availableDonorsDiv = document.getElementById('available-donors');
        availableDonorsDiv.innerHTML = '';

        data.forEach(donor => {
            const donorInfo = document.createElement('div');
            donorInfo.innerHTML = `<strong>Name:</strong> ${donor.name}, <strong>Phone:</strong> ${donor.phone}, <strong>Food Quantity:</strong> ${donor.foodQuantity}, <strong>Address:</strong> ${donor.address}, <strong>City:</strong> ${donor.city}`;
            availableDonorsDiv.appendChild(donorInfo);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}