import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', PostSchema);

export default PostMessage;