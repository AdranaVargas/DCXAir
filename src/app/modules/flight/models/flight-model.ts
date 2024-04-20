export interface Flight {
    Origin: string,
    Destination: string,
	Price: number,
	Transport: Transport
}

export interface Transport {
    FlightCarrier: string,
    FlightNumber: string
}