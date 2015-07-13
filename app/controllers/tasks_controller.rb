require 'pry'

class TasksController < ApplicationController
  before_action :set_task, only: [:show, :edit, :update, :destroy]

  # GET /tasks
  # GET /tasks.json
  def index
    @tasks = Task.all
  end

  # GET /tasks/1
  # GET /tasks/1.json
  def show
  end

  # GET /tasks/new
  def new
    @task = Task.new
    @notebooks = @current_user.notebooks
  end

  # GET /tasks/1/edit
  def edit
    @notebooks = @current_user.notebooks
  end

  # POST /tasks
  # POST /tasks.json
  def create
    @task = Task.new(task_params)

    tags = task_params['all_tags'].split(",").map do |tag|
        Tag.where(name: tag.strip).first_or_create!
    end
    respond_to do |format|
      if @task.save
      file = task_params[:file]
       if file
         cloudObj = Cloudinary::Uploader.upload(file.path, :resource_type => :auto) 
         @task.file = cloudObj['url']
         @task.filename = task_params[:file].original_filename
       else
         @task.file = nil
       end
        @task.user_id = @current_user.id
        @task.save
        format.html { redirect_to root_path, notice: 'Task was successfully created.' }
        format.json { render :show, status: :created, location: @task }
      else
        format.html { render :new }
        format.json { render json: root_path.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tasks/1
  # PATCH/PUT /tasks/1.json
  def update
    respond_to do |format|
      if @task.update(task_params)
      # Update the tags.
      tags = task_params['all_tags'].split(",").map do |tag|
        Tag.where(name: tag.strip).first_or_create!
      end
      file = task_params[:file]
      if file
        cloudObj = Cloudinary::Uploader.upload(file.path, :resource_type => :auto) 
        @task.file = cloudObj['url']
        @task.filename = task_params[:file].original_filename
      else
        @task.file = nil
      end
      @task.save
        format.html { redirect_to root_path, notice: 'Task was successfully updated.' }
        format.json { render :show, status: :ok, location: @task }
      else
        format.html { render :edit }
        format.json { render json: root_path.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tasks/1
  # DELETE /tasks/1.json
  def destroy
    @task.destroy
    respond_to do |format|
      format.html { redirect_to tasks_url, notice: 'Task was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def task_params
      params.require(:task).permit(:name, :due, :location, :file, :notebook_id, :priority, :all_tags)
    end
end
