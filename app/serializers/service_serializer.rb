class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :title, :location, :description, :image
end
