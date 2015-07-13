class PagesController < ApplicationController
  before_action :authenticate

  def index
    @notebooks = Notebook.where(user_id: @current_user.id)
    @tasks = Task.where(user_id: @current_user.id)
  end

  def mytags
    @mytasks = Task.where(user_id: @current_user.id)
    @tags = []

    @mytasks.each do |task|
      task.tags.each do |tag|
        @tags.push tag
      end
    end
    
  end

  private
  def authenticate
      @current_user = User.find session[:user_id] if session[:user_id]
      redirect_to login_path unless @current_user
  end
end
