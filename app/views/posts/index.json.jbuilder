json.array!(@posts) do |post|
  json.extract! post, :id, :title, :author, :intro, :extended, :publishedAt
  json.url post_url(post, format: :json)
end
