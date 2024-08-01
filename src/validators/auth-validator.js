import { z } from 'zod';

// Creating an object schema for login
export const loginSchema = z.object({
    username: z
        .string({ required_error: "Username is required!!" })
        .trim()
        .min(3, { message: "Username must be at least 3 characters!!" })
        .max(80, { message: "Username cannot be more than 80 characters!!" }),
    password: z
        .string({ required_error: "Password is required!!" })
        .trim()
        .min(5, { message: "Password must be at least 5 characters!!" })
        .max(30, { message: "Password cannot be more than 30 characters!!" })
});

// Creating an object schema for signup
export const signupSchema = z.object({
    username: z
        .string({ required_error: "Username is required!!" })
        .trim()
        .min(3, { message: "Username must be at least 3 characters!!" })
        .max(80, { message: "Username cannot be more than 80 characters!!" }),
    email: z
        .string({ required_error: "Email is required!!" })
        .trim()
        .email({ message: "Invalid email address!!" })
        .min(5, { message: "Email must be at least 5 characters!!" })
        .max(80, { message: "Email cannot be more than 80 characters!!" }),
    password: z
        .string({ required_error: "Password is required!!" })
        .trim()
        .min(5, { message: "Password must be at least 5 characters!!" })
        .max(30, { message: "Password cannot be more than 30 characters!!" })
});