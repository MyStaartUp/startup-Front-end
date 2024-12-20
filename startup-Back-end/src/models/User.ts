import mongoose from "mongoose";
import { compareValue, hashValue } from "../utils/bcrypt";

export interface IUserDocument extends mongoose.Document{
    fullName: string,
    email: string,
    password: string,
    createdAt: Date;
    updatedAt: Date;
    comparePassword(val: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema<IUserDocument>(
    {
        fullName: {type: String, required: true, trim: true, minlength: 2, maxlength: 100},
        email: {type: String, required: true, trim: true, lowercase: true, sparse: true},
        password: {type: String, required: true, minlength: 8, maxlength: 255}
    },
    {
        timestamps: true,
        toJSON: {
            transform: function (doc, ret) {
                delete ret.password;
                return ret;
            }
        }    
    }
)

userSchema.pre<IUserDocument>('save', async function (next) {
    if (!this.isModified('password')) return next();

    try {
        this.password = await hashValue(this.password);
        next();
    } catch (error) {
        next(error as Error);
    }
});

userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
    return compareValue(candidatePassword, this.password);
};

export default mongoose.model<IUserDocument>('User', userSchema);
