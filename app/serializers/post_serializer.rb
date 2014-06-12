class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :intro, :extended, :publishedAt
end
