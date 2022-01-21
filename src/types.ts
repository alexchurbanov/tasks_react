export interface Basic {
	id: string;
	title: string;
}

export interface DragItem {
	id: string;
	index: number;
}

export interface TaskDragItem extends DragItem {
	parentId: string;
}