class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.string :author
      t.string :intro
      t.string :extended
      t.datetime :publishedAt

      t.timestamps
    end
  end
end
