import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    title: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', PostSchema);

export default PostMessage;