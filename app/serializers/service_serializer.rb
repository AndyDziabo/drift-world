class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :title, :location, :description, :image
  has_one :user
end
