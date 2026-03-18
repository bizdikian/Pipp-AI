// TypeScript type definitions for Pipp-AI app

export interface User {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Post {
    id: string;
    title: string;
    content: string;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Journey {
    id: string;
    userId: string;
    productIds: string[];
    createdAt: Date;
    updatedAt: Date;
}

export interface CartItem {
    productId: string;
    quantity: number;
}

export interface Order {
    id: string;
    userId: string;
    items: CartItem[];
    total: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Wallet {
    userId: string;
    balance: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Transaction {
    id: string;
    walletId: string;
    amount: number;
    type: 'credit' | 'debit';
    createdAt: Date;
}