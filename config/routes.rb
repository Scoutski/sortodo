# == Route Map
#
#        Prefix Verb   URI Pattern                   Controller#Action
#          root GET    /                             pages#index
#         login GET    /login(.:format)              session#new
#               POST   /login(.:format)              session#create
#               DELETE /login(.:format)              session#destroy
#         users POST   /users(.:format)              users#create
#      new_user GET    /users/new(.:format)          users#new
#     edit_user GET    /users/:id/edit(.:format)     users#edit
#          user PATCH  /users/:id(.:format)          users#update
#               PUT    /users/:id(.:format)          users#update
#               DELETE /users/:id(.:format)          users#destroy
#     notebooks POST   /notebooks(.:format)          notebooks#create
#  new_notebook GET    /notebooks/new(.:format)      notebooks#new
# edit_notebook GET    /notebooks/:id/edit(.:format) notebooks#edit
#      notebook PATCH  /notebooks/:id(.:format)      notebooks#update
#               PUT    /notebooks/:id(.:format)      notebooks#update
#               DELETE /notebooks/:id(.:format)      notebooks#destroy
#         tasks POST   /tasks(.:format)              tasks#create
#      new_task GET    /tasks/new(.:format)          tasks#new
#     edit_task GET    /tasks/:id/edit(.:format)     tasks#edit
#          task PATCH  /tasks/:id(.:format)          tasks#update
#               PUT    /tasks/:id(.:format)          tasks#update
#               DELETE /tasks/:id(.:format)          tasks#destroy
#

Rails.application.routes.draw do
  
  root :to => 'session#new'
  post '/' => 'session#create'
  delete '/' => 'session#destroy'

  get '/app' => 'pages#index', :as => 'app'

  get '/mytags' => 'pages#mytags'

  resources :users, :except => [:index, :show]
  resources :notebooks, :except => [:index, :show]
  resources :tasks, :except => [:index, :show]
end
