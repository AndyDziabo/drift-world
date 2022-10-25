Rails.application.routes.draw do
  resources :hotdogs, only: [:index, :show, :create, :update, :destroy]
  resources :comments
  resources :services, only: [:index, :show, :create, :update, :destroy]
  resources :events, only: [:index, :show, :create, :update, :destroy]
  resources :classifieds, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:create, :show]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
