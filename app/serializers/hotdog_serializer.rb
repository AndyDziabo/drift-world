class HotdogSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image
  has_one :user
end
