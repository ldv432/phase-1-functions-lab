function distanceFromHqInBlocks(pickupLocation){
    if (pickupLocation < 42){
        return (42 - pickupLocation);
    } else if (pickupLocation > 42) {
        return (pickupLocation - 42);
        }
        
    }

function distanceFromHqInFeet(pickupLocation){
    return distanceFromHqInBlocks(pickupLocation) * 264
}

function distanceTravelledInFeet(start, destination){
    if (destination < start) {
        return ((start - destination) * 264)
    }
    else {
        return ((destination - start) * 264)
    }
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400){
        return 0
    }
    else if (400 <= distance && distance <= 2000){
        return 0.02*(distance - 400)
    }
    else if (distance > 2000 && distance < 2500){
        return 25
    }
    else if (distance > 2500){
        return 'cannot travel that far'
    }
}