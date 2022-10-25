class ClassifiedsController < ApplicationController

    def index
        render json: Classified.all, status: :ok
    end

    def show
        ad = Classified.find(params[:id])
        render json: ad.comments, status: :ok
    end

    def create
        classified = @current_user.classifieds.create!(classifieds_params)
        render json: classified, status: :created
    end

    def update
        classified = Classified.find(params[:id])
        classified.update(classifieds_params)
        render json: classified, status: :accepted
    end

    def destroy
        classified = Classified.find(params[:id])
        classified.destroy
        head :no_content
    end

    private

    def classifieds_params
        params.permit(:title, :price, :location, :description, :image, :category)
    end

end
