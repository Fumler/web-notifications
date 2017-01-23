import mongoose, { Schema } from 'mongoose'

const articleSchema = new Schema({
  author: {
    type: String
  },
  title: {
    type: String
  },
  content: {
    type: String
  }
}, {
  timestamps: true
})

articleSchema.methods = {
  view (full) {
    const view = {
      id: this.id,
      author: this.author,
      title: this.title,
      content: this.content,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
    } : view
  }
}

export default mongoose.model('Article', articleSchema)