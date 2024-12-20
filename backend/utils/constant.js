import crypto from "crypto";

export function generateOtp() {
    return crypto.randomInt(1001,9999);
}