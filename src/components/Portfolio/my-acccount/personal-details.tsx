"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
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
import { Pencil, Mail, Phone, Lock } from "lucide-react"
import { BiUser } from "react-icons/bi";

import { useToast } from "@/hooks/use-toast"
import SubscriptionCard from "./subscription-card"
import FeedbackCard from "./feedback-card"

// Mock initial data
const initialUserData = {
    fullName: "Alex Mitchell",
    emailAddress: "alex.mitchell@example.com",
    phoneNumber: "+1 (555) 123-4567",
    password: "••••••",
}

export default function PersonalDetailsCard() {
    const [userData, setUserData] = useState(initialUserData)
    const [editingField, setEditingField] = useState<string | null>(null)
    const [tempValue, setTempValue] = useState("")
    const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false)
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const { toast } = useToast()

    const handleEdit = (field: string, value: string) => {
        setEditingField(field)
        setTempValue(value)
    }

    const handleSave = (field: string) => {
        if (field === "phoneNumber" && !isValidPhoneNumber(tempValue)) {
            toast({
                title: "Invalid phone number",
                description: "Please enter a valid phone number",
                variant: "destructive",
            })
            return
        }

        if (field === "emailAddress" && !isValidEmail(tempValue)) {
            toast({
                title: "Invalid email",
                description: "Please enter a valid email address",
                variant: "destructive",
            })
            return
        }

        setUserData({ ...userData, [field]: tempValue })
        setEditingField(null)
    }

    const handleCancel = () => {
        setEditingField(null)
    }

    const handlePasswordChange = () => {
        if (newPassword !== confirmPassword) {
            toast({
                title: "Passwords don't match",
                description: "Please make sure your passwords match",
                variant: "destructive",
            })
            return
        }

        if (newPassword.length < 6) {
            toast({
                title: "Password too short",
                description: "Password must be at least 6 characters long",
                variant: "destructive",
            })
            return
        }

        setUserData({ ...userData, password: "••••••" })
        setIsPasswordDialogOpen(false)
        setNewPassword("")
        setConfirmPassword("")

        toast({
            title: "Password updated",
            description: "Your password has been successfully updated",
        })
    }

    const handleDeleteAccount = () => {
        // In a real app, this would call an API to delete the account
        setUserData(initialUserData)
        toast({
            title: "Account deleted",
            description: "Your account has been successfully deleted",
        })
    }

    const handleSaveChanges = () => {
        // In a real app, this would call an API to save all changes
        toast({
            title: "Changes saved",
            description: "Your personal details have been updated",
        })
    }

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    const isValidPhoneNumber = (phone: string) => {
        return /^\+?[0-9\s\-()]{10,20}$/.test(phone)
    }

    return (
        <div className="grid lg:grid-cols-9 gap-5 mb-32">
            <div className="col-span-7">
                <Card className="w-full shadow-md">
                    <CardHeader>
                        <CardTitle className="text-xl">Personal Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        {/* Full Name */}
                        <div className="flex items-center space-x-3 bg-[#F9FAFB] px-4 py-3 rounded-md">
                            <BiUser className="h-7 w-7 text-[#737373]" />
                            <div className="flex-1">
                                <p className="text-xs text-[#737373]">Full Name</p>
                                {editingField === "fullName" ? (
                                    <div className="flex space-x-2">
                                        <Input value={tempValue} onChange={(e) => setTempValue(e.target.value)} className="flex-1 text-sm font-medium text-[#000000]" />
                                        <Button size="sm" onClick={() => handleSave("fullName")}>
                                            Save
                                        </Button>
                                        <Button size="sm" variant="outline" onClick={handleCancel}>
                                            Cancel
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium">{userData.fullName}</p>
                                        <Button variant="ghost" size="icon" onClick={() => handleEdit("fullName", userData.fullName)}>
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Email Address */}
                        <div className="flex items-center space-x-3 bg-[#F9FAFB] px-4 py-3 rounded-md">
                            <Mail className="h-7 w-7 text-[#737373]" />
                            <div className="flex-1">
                                <p className="text-xs text-[#737373]">Email Address</p>
                                {editingField === "emailAddress" ? (
                                    <div className="flex space-x-2">
                                        <Input
                                            value={tempValue}
                                            onChange={(e) => setTempValue(e.target.value)}
                                            className="flex-1 text-sm font-medium text-[#000000]"
                                            type="email"
                                        />
                                        <Button size="sm" onClick={() => handleSave("emailAddress")}>
                                            Save
                                        </Button>
                                        <Button size="sm" variant="outline" onClick={handleCancel}>
                                            Cancel
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium">{userData.emailAddress}</p>
                                        <Button variant="ghost" size="icon" onClick={() => handleEdit("emailAddress", userData.emailAddress)}>
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div className="flex items-center space-x-3 bg-[#F9FAFB] px-4 py-3 rounded-md">
                            <Phone className="h-7 w-7 text-[#737373]" />
                            <div className="flex-1">
                                <p className="text-xs text-[#737373]">Phone Number</p>
                                {editingField === "phoneNumber" ? (
                                    <div className="flex space-x-2">
                                        <Input value={tempValue} onChange={(e) => setTempValue(e.target.value)} className="flex-1 text-sm font-medium text-[#000000]" type="tel" />
                                        <Button size="sm" onClick={() => handleSave("phoneNumber")}>
                                            Save
                                        </Button>
                                        <Button size="sm" variant="outline" onClick={handleCancel}>
                                            Cancel
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium">{userData.phoneNumber}</p>
                                        <Button variant="ghost" size="icon" onClick={() => handleEdit("phoneNumber", userData.phoneNumber)}>
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Password */}
                        <div className="flex items-center space-x-3 bg-[#F9FAFB] px-4 py-3 rounded-md">
                            <Lock className="h-7 w-7 text-[#737373]" />
                            <div className="flex-1">
                                <p className="text-sm text-[#737373]">Password</p>
                                <div className="flex items-center justify-between">
                                    <p>{userData.password}</p>
                                    <Dialog open={isPasswordDialogOpen} onOpenChange={setIsPasswordDialogOpen}>
                                        <DialogTrigger asChild>
                                            <Button variant="secondary" size="sm">
                                                Change
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Change Password</DialogTitle>
                                                <DialogDescription>Enter your new password below.</DialogDescription>
                                            </DialogHeader>
                                            <div className="space-y-4 py-4">
                                                <div className="space-y-2">
                                                    <p className="text-sm">New Password</p>
                                                    <Input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="text-sm">Confirm Password</p>
                                                    <Input
                                                        type="password"
                                                        value={confirmPassword}
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <DialogFooter>
                                                <Button variant="outline" onClick={() => setIsPasswordDialogOpen(false)}>
                                                    Cancel
                                                </Button>
                                                <Button onClick={handlePasswordChange}>Update Password</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-between pt-4">
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="destructive" className="bg-red-100 hover:bg-red-200 text-red-600 hover:text-red-700">
                                        Delete Account
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your account and remove your data from our
                                            servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction onClick={handleDeleteAccount} className="bg-red-600 hover:bg-red-700">
                                            Delete
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>

                            <Button className="bg-green-600 hover:bg-green-700" onClick={handleSaveChanges}>
                                Save Changes
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                <div className="">
                    <FeedbackCard />
                </div>
            </div>
            <div className="col-span-2">
                <SubscriptionCard />
            </div>
        </div>
    )
}
