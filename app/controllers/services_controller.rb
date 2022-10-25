class ServicesController < ApplicationController
    
    def index
        render json: Service.all, status: :ok
    end

    def create
        service = @current_user.services.create!(services_params)
        render json: service, status: :created
    end

    private

    def services_params
        params.permit(:title, :location, :description, :image)
    end
end
