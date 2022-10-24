class ClassifiedSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :location, :description, :image, :category
end
