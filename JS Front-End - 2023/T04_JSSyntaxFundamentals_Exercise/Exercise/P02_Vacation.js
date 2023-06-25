function vacantion(people, type, day) {
    let totalPrice = 0;
    let pricePerNight = 0;
    
    if (type === "Students") {
        switch (day) {
            case "Friday":
                pricePerNight = 8.45;
                break;
            case "Saturday":
                pricePerNight = 9.80;
                break;
            case "Sunday":
                pricePerNight = 10.46;
                break;
        }
    }
    else if (type === "Business") {
        switch (day) {
            case "Friday":
                pricePerNight = 10.90;
                break;
            case "Saturday":
                pricePerNight = 15.60;
                break;
            case "Sunday":
                pricePerNight = 16;
                break;
        }
    }
    else if (type === "Regular") {
        switch (day) {
            case "Friday":
                pricePerNight = 15;
                break;
            case "Saturday":
                pricePerNight = 20;
                break;
            case "Sunday":
                pricePerNight = 22.50;
                break;
        }
    }

    totalPrice = people * pricePerNight;

    if (type ==="Students" && people>=30) {
        totalPrice *= 0.85;
    }

    if (type === "Business" && people >= 100) {
        totalPrice = (people-10) * pricePerNight;
    }

    if (type === "Regular" && people >= 10 && people <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacantion(30, "Students", "Sunday");