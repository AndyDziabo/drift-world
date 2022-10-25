class CommentsController < ApplicationController

    def index
        render json: Comment.all, status: :ok
    end

    def create
        comment = @current_user.comments.create!(comments_params)
        render json: comment, status: :created
    end

    private

    def comments_params
        params.permit(:comment, :classified_id)
    end

end
