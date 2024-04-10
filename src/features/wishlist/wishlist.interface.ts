import mongoose, { Document, Model } from 'mongoose';


interface IWishlistBase {
  mentor: mongoose.Types.ObjectId | string;
  product: mongoose.Types.ObjectId | string;

}

export interface IWishlistDocument extends Document, IWishlistBase {
  user: mongoose.Types.ObjectId | string;
}
