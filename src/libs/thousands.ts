function thousands(num: number = 0): string {
    const parseFloat2 = parseFloat(String(num)).toFixed(2);
    const parts = Number(parseFloat2 || 0)
        .toString()
        .split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");    
    return parts.join(",");
}

export default thousands;