class EventsController < ApplicationController

    def index
        render json: Event.all, status: :ok
    end

    def create
        event = @current_user.events.create!(events_params)
        render json: event, status: :created
    end

    private

    def events_params
        params.permit(:name, :date, :location,:entry_fee, :description, :image)
    end
end
