class ListsController < ApplicationController

  def index

  end

  def new
    @list = List.new
  end

  def create
    @list = List.create(list_params)
    redirect_to list_path
  end
end
