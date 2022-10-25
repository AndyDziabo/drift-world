class ServicesController < ApplicationController
    
    def index
        render json: Service.all, status: :ok
    end

    def create
        service = @current_user.services.create!(services_params)
        render json: service, status: :created
    end

    def update
        service = Service.find(params[:id])
        service.update(services_params)
        render json: service, status: :accepted
    end

    def destroy
        service = Service.find(params[:id])
        service.destroy
        head :no_content
    end

    private

    def services_params
        params.permit(:title, :location, :description, :image)
    end
end
