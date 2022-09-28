export interface Token {
    id: number;
    name: string;
    status: 'green'|'yellow'|'red';
    type: string;
    conditions: string;
    volume: number;
    roi: number;
    free: number;
    hedge: number;
}