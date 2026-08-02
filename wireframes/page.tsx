"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Dashboard } from "@/components/aura/dashboard"
import { CheckIn } from "@/components/aura/checkin"
import { Planner } from "@/components/aura/planner"
import { Journal } from "@/components/aura/journal"
import { Onboarding } from "@/components/aura/onboarding"

export default function Page() {
  const [tab, setTab] = useState("dashboard")

  return (
    <Tabs value={tab} onValueChange={setTab} className="min-h-screen bg-background">
      {/* Screen switcher */}
      <div className="sticky top-0 z-30 flex justify-center border-b border-border/60 bg-background/80 px-4 py-3 backdrop-blur">
        <TabsList className="rounded-full bg-secondary p-1">
          <TabsTrigger value="dashboard" className="rounded-full px-4">
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="checkin" className="rounded-full px-4">
            Check-in
          </TabsTrigger>
          <TabsTrigger value="planner" className="rounded-full px-4">
            Planner
          </TabsTrigger>
          <TabsTrigger value="journal" className="rounded-full px-4">
            Journal
          </TabsTrigger>
          <TabsTrigger value="onboarding" className="rounded-full px-4">
            Onboarding
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="dashboard">
        <Dashboard onGoToCheckIn={() => setTab("checkin")} />
      </TabsContent>
      <TabsContent value="checkin">
        <CheckIn />
      </TabsContent>
      <TabsContent value="planner">
        <Planner />
      </TabsContent>
      <TabsContent value="journal">
        <Journal />
      </TabsContent>
      <TabsContent value="onboarding">
        <Onboarding />
      </TabsContent>
    </Tabs>
  )
}
