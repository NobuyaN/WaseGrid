import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const NoteSchema = new Schema(
    {
        title: {
            type: String, 
            required: true
        },
        content: {
            type: String, 
            required: true
        },
    },
    {
        timestamps: true
    }
)

const Note = model("Note", NoteSchema);

export default Note;