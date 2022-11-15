Rails.application.routes.draw do
  # resources :reviews, only: [:create, :update, :destroy]
  # resources :users
  resources :products, only: [:index, :show, :create] do 
    resources :reviews, only: [:index]
  end 

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
