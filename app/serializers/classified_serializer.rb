class ClassifiedSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :location, :description, :image, :category
  has_one :user
end
