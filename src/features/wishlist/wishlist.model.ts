import mongoose, { model, Model, Schema, Document, Types, Error as MongooseError } from 'mongoose';
import { IWishlistDocument } from '@wishlist/wishlist.interface';

const wishlistSchema: Schema<IWishlistDocument> = new Schema({
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Wishlist item must belong to a mentor'],
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Wishlist item must belong to a mentor'],
  }
},
  { timestamps: true });


export const WishlistModel: Model<IWishlistDocument> = model<IWishlistDocument>('Wishlist', wishlistSchema);
