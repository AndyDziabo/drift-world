class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :location, :entry_fee, :description, :image
end
