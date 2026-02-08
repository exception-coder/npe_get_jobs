declare function log(...args: any): void;
declare namespace log {
    var quiet: boolean;
    var prefix: number;
}
export default log;
