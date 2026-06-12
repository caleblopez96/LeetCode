function convertTemperature(celsius: number): number[] {
    let result: number[] = [];

    let kelvin: number = celsius + 273.15;
    let fahrenheit: number = celsius * 1.8 + 32.0;

    result.push(kelvin, fahrenheit);

    return result;
}
