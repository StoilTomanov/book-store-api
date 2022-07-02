function mapError(error: { code: number; name: string; errors: { [s: string]: any; } | ArrayLike<unknown>; message: any; }): any {
    if (Array.isArray(error)) {
        return error;
    } else if (error.code == 11000) {
        return 'User already exists';
    } else if (error.name == 'ValidationError') {
        return Object.values(error.errors).map(e => e.message).join('\n');
    } else if (typeof error.message == 'string') {
        return error.message;
    } else {
        return 'Request error';
    }
}

module.exports = mapError;