
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { useEffect, useState } from "react";

interface ConfirmationDialogProps {
	open: boolean;
	onConfirm?: (isConfirmed: boolean) => void
}

export function DeleteDialog({ 
	open,
	onConfirm
}: ConfirmationDialogProps) {
	
	const [show, setShow] =useState(open)
	const handleConfirm = () => {
		onConfirm && onConfirm(true);
		setShow(false)
	}

	const handleCancel = () => {
		onConfirm && onConfirm(false);
		setShow(false)
	}

	useEffect(() => {
		setShow(open)
	}, [open])

	return (
	  <AlertDialog open={show}>
		<AlertDialogContent>
		  <AlertDialogHeader>
			<AlertDialogTitle>Anda yakin?</AlertDialogTitle>
			<AlertDialogDescription>
			  Aksi ini akan menghapus data secara permanen dan tidak dapat dikembalikan
			</AlertDialogDescription>
		  </AlertDialogHeader>
		  <AlertDialogFooter>
			<AlertDialogCancel onClick={handleCancel}>Cancel</AlertDialogCancel>
			<AlertDialogAction
			  onClick={handleConfirm}
			>
			  Delete
			</AlertDialogAction>
		  </AlertDialogFooter>
		</AlertDialogContent>
	  </AlertDialog>
	)
	}