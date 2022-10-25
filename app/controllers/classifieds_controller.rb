class ClassifiedsController < ApplicationController

    def index
        render json: Classified.all, status: :ok
    end

    def create
        classified = @current_user.classifieds.create!(classifieds_params)
        render json: classified, status: :created
    end

    private

    def classifieds_params
        params.permit(:title, :price, :location, :description, :image, :category)
    end

end
